async function getContributions(username) {
  var data = await (
    await fetch(
      `https://corsanywhere.herokuapp.com/https://github-contributions-api.deno.dev/${username}.json`
    )
  ).json();
  // console.log(data.totalContributions);
  console.log(data);
}
getContributions("Xim-ya"); //
