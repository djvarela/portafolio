/src
│
├── /app                           # Entry points y configuración global
│   ├── App.tsx                    # Root de la app
│   ├── main.tsx                   # Bootstrap (ReactDOM)
│   ├── routes.tsx                 # Rutas generales
│   ├── providers.tsx              # Providers contextuales
│   └── store.ts                   # Configuración global del estado (Redux, Zustand, etc.)
│
├── /domains                       # 🧩 Modelos y lógica del dominio
│   └── /user
│       ├── user.entity.ts         # Entidad del dominio
│       ├── user.types.ts          # Tipos y DTOs del dominio
│       └── user.value-object.ts   # Objetos de valor (si los hay)
│
├── /usecases                      # ⚙️ Casos de uso (interactúan con dominio e infraestructura)
│   └── /user
│       ├── loginUser.ts           # Login logic
│       ├── registerUser.ts        # Registro
│       └── fetchCurrentUser.ts    # Obtener usuario actual
│
├── /infrastructure                # 🌐 Implementaciones externas
│   ├── /api
│   │   ├── httpClient.ts          # Wrapper de fetch/axios
│   │   └── /user
│   │       ├── userApi.ts         # Requests HTTP al backend
│   │       └── user.mapper.ts     # Adaptador entre API y dominio
│   └── /persistence
│       ├── localStorageAdapter.ts # Adaptador para almacenamiento
│       └── tokenStorage.ts        # Manejo de tokens
│
├── /adapters                      # 🔌 Adaptadores (interfaz entre casos de uso y UI)
│   └── /user
│       ├── useUserController.ts   # Hook que usa casos de uso y maneja estado
│       └── userPresenter.ts       # Presentador de datos al formato de UI
│
├── /presentation                  # 🖼️ UI y componentes de presentación
│   ├── /pages
│   │   └── /Login
│   │       ├── LoginPage.tsx
│   │       ├── LoginForm.tsx
│   │       └── login.styles.ts    # Estilos del módulo
│   ├── /components
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   └── /layout
│       └── AppLayout.tsx
│
├── /shared                        # 🔁 Código reutilizable y utilidades
│   ├── /hooks
│   │   └── useDebounce.ts
│   ├── /lib
│   │   ├── formatDate.ts
│   │   └── validators.ts
│   ├── /ui                        # Design system (si lo hay)
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   └── /config
│       ├── env.ts                 # Variables de entorno
│       └── constants.ts           # Constantes globales
│
├── /tests                         # 🧪 Tests unitarios e integración
│   └── user
│       └── loginUser.test.ts
│
├── index.html
└── tsconfig.json