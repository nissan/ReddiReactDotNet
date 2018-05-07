import * as logger from "structured-log";

export const log = logger.configure().writeTo(new logger.ConsoleSink()).create();
