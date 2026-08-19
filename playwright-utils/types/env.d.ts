export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TEST_ENV?: 'local'
      BASE_URL?: string
      CI?: string
    }
  }
}
