export async function allStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const {clients: {aws}} = ctx
  // @ts-ignore
  const dataEvent = ctx.body
  console.log(`ID:${dataEvent.orderId} StatusPagamento:${dataEvent.currentState} Data:${dataEvent.currentChangeDate}`)
  const order = await ctx.clients.oms.order(dataEvent.orderId)

  console.log(order.clientProfileData.email.split('-')[0])
  const emailClient = order.clientProfileData.email.split('-')[0]

  const cliente = await aws.leadList({email: emailClient})
  console.log(cliente)

  await next()
}
