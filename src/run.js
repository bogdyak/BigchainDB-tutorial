import * as transUtils from './run'

(
    async () => {
        try {
            await transUtils.createApp()
        } catch (ex) {
            // TODO - handle error
        }       
    }
)()