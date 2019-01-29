const execAsync = (...functions) => async context => {
  for (const func of functions) await func(context)
}

export default {
  execAsync
}
