# Web3 frontend / playground

### Requirements

- node.js 14+
- yarn / npm
- package.json

### Set up basics

Run the following command on your local environment:

```
git clone --depth=1 . project-name
cd your-project-name
yarn
```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

Open http://localhost:3000 with your favorite browser, go nuts.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── images               # etc               
├── src
│   ├── layout               # Atomic layout components
│   ├── lib                  # Components, Connectors, Types, Theme, Hooks, Utils, etc.
│   ├── pages                # Next JS pages
│   ├── styles               # .
└── tsconfig.json            # TypeScript configuration
```
