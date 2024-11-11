import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '4bcb56fb3e514a7d8fd45d62f8abb92b'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'ae298d87257549699e8bd405d6d12b4b'
                    }
                }
            }
        }
    }
}
