const context = cast.framework.CastReceiverContext.getInstance();
const options = new cast.framework.CastReceiverOptions();

options.skipMplLoad = true;

context.start(options);
