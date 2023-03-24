async function getGroupId() {
  const data = await client.getAllGroups();
  const groups = data.filter((e) => e.formattedTitle.includes("Rede"));

  return groups[0].id;
}
