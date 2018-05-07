import * as logger from "structured-log";

export const log = logger.configure()
.minLevel.warning()
.writeTo(new logger.ConsoleSink())
.create();
