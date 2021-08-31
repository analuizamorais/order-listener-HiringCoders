export async function allStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const {clients: {aws}} = ctx
  // @ts-ignore
  const dataEvent = ctx.body
  //Capta as informações do pedido realizado
  console.log(`ID:${dataEvent.orderId} StatusPagamento:${dataEvent.currentState} Data:${dataEvent.currentChangeDate}`)
  const order = await ctx.clients.oms.order(dataEvent.orderId)
  //Descodifica o email captado
  console.log(order.clientProfileData.email.split('-')[0])
  const emailClient = order.clientProfileData.email.split('-')[0]
  //Fornece o email captado ao cliente aws (api gateway)
  const cliente = await aws.leadList({email: emailClient})
  console.log(cliente)

  await next()
}
