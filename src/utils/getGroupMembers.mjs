export async function getGroupMembers(client) {
  const data = await client.getGroupMembers(process.env.GROUP_TO_FIND);

  return data;
}

export function checkUserIsInGroup(data, user) {
  const onlyNumber = user.replace(/[^0-9]/g, "");

  return data.find((e) => e.id.includes(onlyNumber));
}
