function search() {
  let input, filter, li, e, i, tag, tagValue, txtValue;
  // @ts-expect-error
  let tagFilter = document.querySelector(".tagFilter").value || "All";
  input = document.getElementById("searchInput");
  // @ts-expect-error
  filter = input.value.toUpperCase();
  // @ts-expect-error
  li = document.querySelector(".gcontainer").getElementsByTagName("div");
  for (i = 0; i < li.length; i++) {
    e = li[i].querySelector("h4.title");
    // @ts-expect-error
    txtValue = e.textContent || e.innerText;
    tag = li[i].querySelector("span.tag");
    // @ts-expect-error
    tagValue = tag.textContent || tag.innerText;
    if (
      txtValue.toUpperCase().indexOf(filter) > -1 ||
      tagValue.toLowerCase() == filter.toLowerCase()
    ) {
      if (tagFilter.toLowerCase() != "all") {
        if (tagValue.toLowerCase() == tagFilter.toLowerCase()) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      } else {
        li[i].style.display = "";
      }
    } else {
      li[i].style.display = "none";
    }
  }
}

export default search;
