export default async () => {
  let assetsHTTP = await fetch("assets/assets.json");
  let assets = await assetsHTTP.json();

  // make an index
  var index = [];
  for (var x in assets) {
    index.push(x);
  }

  for (let i = 1; i < assets.len + 1; i++) {
    if (!assets[index[i]][0].type || assets[index[i]][0].type != "pointer") {
      throw new Error("Not a pointer");
    }
    if (!assets[index[i]][0].target) {
      throw new Error("No url for pointer to follow");
    }
    let aFollowHTTP = await fetch("/assets/" + assets[index[i]][0].target);
    let aFollow = await aFollowHTTP.json();
    if (aFollow[index[i]] != undefined) {
      assets[index[i]] = aFollow[index[i]];
    } else {
      assets[index[i]] = aFollow;
    }
  }
  return assets;
};
