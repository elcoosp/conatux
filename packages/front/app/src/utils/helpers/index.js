export const pipe = {
  execAsync: (...funcs) => context =>
    funcs.reduce(async (ctx, func) => {
      await func(ctx)
      return ctx
    }, context)
}
