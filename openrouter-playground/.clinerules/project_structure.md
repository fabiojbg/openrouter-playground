# Project Overview

The project is a Next.js application built with TypeScript and styled using Tailwind CSS. It aims to provide a user-friendly interface to test OpenRouter API keys, offering both a ChatGPT-like environment and a more detailed Playground.

# Project Guidelines

- working with the project: To know what the project is about and how it is structured, read the README.md and the sections 'Project Structure' and 'Key Modules & Responsibilities' below.
- Pay attention to the MCP Tools available to use them whenever necessary
- Keep README.md and the sections "Project Structure" and "Module Responsibilities" in this file(.clinerules) in sync with new capabilities
- this project use yarn. So you must use it to install packages or run

# Project Structure

- The project is structured to separate concerns and maintain a clean architecture. 
You must mantain this structure updated in case of any change in it or in file´s responsabilities

```
.
├── .eslintrc.json             # ESLint configuration for code linting
├── .gitignore                 # Specifies intentionally untracked files for Git
├── LICENSE                    # Project's software license
├── next.config.js             # Next.js configuration file
├── package.json               # Project metadata, dependencies, and scripts
├── postcss.config.js          # PostCSS configuration (used with Tailwind CSS)
├── prettier.config.js         # Prettier configuration for code formatting
├── README.md                  # Project overview, setup, and usage instructions
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript compiler options
├── yarn.lock                  # Records exact versions of project dependencies
├── images/                    # Contains static images used in the project
│   ├── app_playground_sample.png # Demo image of the Playground environment
│   └── app_sample.png         # Demo image of the ChatGPT-like environment
├── public/                    # Static assets served directly by Next.js
│   └── favicon.ico            # Favicon for the website
└── src/                       # Main source code directory
    ├── openrouter.models.example.json # Example JSON structure for OpenRouter models
    ├── components/            # Reusable UI components
    │   ├── auth/              # Authentication-related components
    │   │   └── AddTokenModal.tsx # Modal for adding/managing API tokens
    │   ├── chat/              # Components for the ChatGPT-like interface
    │   │   ├── AssistantMessageContent.tsx # Renders messages from the assistant
    │   │   ├── ChatHeader.tsx     # Header section of the chat interface
    │   │   ├── ChatInput.tsx      # Input field for sending chat messages
    │   │   ├── ChatMessage.tsx    # Component for a single chat message
    │   │   ├── ChatMessages.tsx   # Container for all chat messages
    │   │   ├── ChatPlaceholder.tsx # Placeholder content for empty chat
    │   │   ├── UserMessageContent.tsx # Renders messages from the user
    │   │   └── sidebar/         # Components for the chat sidebar
    │   │       ├── ChatSidebar.tsx  # Main sidebar component for chat
    │   │       ├── buttons/       # Button components within the chat sidebar
    │   │       │   ├── ApiKey.tsx       # UI for API key input/management
    │   │       │   ├── ButtonContainer.tsx # Generic container for sidebar buttons
    │   │       │   ├── CurrentModel.tsx # Displays/selects the current AI model
    │   │       │   └── ThemeButton.tsx  # Button to toggle UI theme
    │   │       └── conversation/  # Components for managing chat conversations
    │   │           ├── Conversation.tsx # Represents a single conversation item
    │   │           └── Conversations.tsx # Lists all saved conversations
    │   ├── hooks/               # Custom React hooks for reusable logic
    │   │   └── useModels.tsx      # Hook for fetching and managing AI models
    │   ├── input/               # Generic input field components
    │   │   ├── Dropdown.tsx     # Dropdown select component
    │   │   ├── Slider.tsx       # Slider input component
    │   │   └── TextArea.tsx     # Text area input component
    │   ├── misc/                # Miscellaneous or general-purpose components
    │   │   ├── Github.tsx       # GitHub icon/link component
    │   │   └── GithubStar.tsx   # GitHub star button/display component
    │   └── playground/          # Components specific to the Playground environment
    │       ├── AddMessage.tsx     # Component to add messages in the playground
    │       ├── ConfigSidebar.tsx  # Sidebar for playground configurations
    │       ├── PlaygroundHeader.tsx # Header for the playground interface
    │       ├── PlaygroundMessage.tsx # Component for a single playground message
    │       ├── PlaygroundMessages.tsx # Container for all playground messages
    │       ├── SystemMessage.tsx  # Component for system messages in playground
    │       └── conversations/   # Playground-specific conversation management
    │           ├── Conversation.tsx # Represents a single playground conversation
    │           └── PlaygroundConversations.tsx # Lists playground conversations
    ├── context/                 # React Context API providers for global state
    │   ├── AuthProvider.tsx       # Manages authentication state (API keys)
    │   ├── OpenAIProvider.tsx     # Manages OpenAI/OpenRouter related state
    │   └── PlaygroundProvider.tsx # Manages state for the Playground environment
    ├── pages/                   # Next.js pages, defining application routes
    │   ├── _app.tsx             # Custom App component (global layout/styles)
    │   ├── _document.tsx        # Custom Document component (modifies <html>, <body>)
    │   ├── index.tsx            # Home page (likely the chat interface)
    │   ├── playground.tsx       # Page for the Playground environment
    │   ├── api/                 # API routes (server-side logic)
    │   │   ├── completion.ts    # API endpoint for handling AI completions
    │   │   └── models.ts        # API endpoint for fetching available AI models
    │   └── chat/                # Chat-related pages
    │       └── [id].tsx         # Dynamic route for individual chat conversations
    ├── styles/                  # Global styles and Tailwind CSS setup
    │   └── globals.css          # Global CSS styles, Tailwind base/utilities
    └── utils/                   # Utility functions and helper modules
        ├── History.ts           # Utilities for managing conversation history
        ├── utils.ts             # General utility functions
        └── OpenAI/              # Utilities specific to OpenAI/OpenRouter API
            ├── index.ts           # Barrel file, exports modules from this directory
            ├── OpenAI.ts          # Core logic for API interaction
            └── OpenAI.types.ts    # TypeScript types for API data structures
```

## Key Modules & Responsibilities

*   **Configuration Files (Root)**: Define project settings, dependencies, linting rules, and build configurations.
*   **`public/`**: Serves static assets like the favicon.
*   **`src/components/`**: Contains all reusable UI elements.
    *   **`auth/`**: Handles API key input and storage.
    *   **`chat/`**: Builds the primary chat interface, including message display, input, sidebar navigation, and conversation management.
    *   **`playground/`**: Builds the more advanced playground interface, allowing for detailed configuration and message interaction.
    *   **`hooks/`**: Provides reusable stateful logic, like `useModels` for fetching model information.
    *   **`input/`**: Generic UI elements for user input.
*   **`src/context/`**: Manages global application state using React Context. This is crucial for sharing data like API keys, selected models, and conversation history across different parts of the application.
*   **`src/pages/`**: Defines the application's routes.
    *   `index.tsx` and `playground.tsx` are the main user-facing pages.
    *   `api/` routes handle server-side logic, such as proxying requests to the OpenRouter API for completions and model fetching. This is important for keeping API keys secure if they weren't stored client-side.
*   **`src/styles/`**: Contains global CSS.
*   **`src/utils/`**: Houses helper functions.
    *   `History.ts` likely manages the local storage of conversation history.
    *   `OpenAI/` directory contains the core logic for interacting with the OpenRouter API, including type definitions, API interaction logic, and default configurations.

This structure provides a good separation of concerns, making the codebase relatively easy to navigate and maintain.
