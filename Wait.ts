
//% weight=100 color=#2E2E2E icon="\u23F3"
//% groups=["Custom Blocks"]
namespace Wait {
    /**
     * Wait for a number of seconds using microsecond precision
     */
    //% block="wait %Seconds seconds"
    //% Seconds.defl=1
    //% group="Custom Blocks"
    export function waitMicrosBased(Seconds: number): void {
        for (let index = 0; index < Seconds * 1000; index++) {
            control.waitMicros(1000)
        }
    }
}
