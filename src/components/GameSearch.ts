// @ts-nocheck
function search() {
    let input, filter, li, e, i, tag, tagValue, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    li = document.querySelector(".gcontainer").getElementsByTagName('div');
    for (i = 0; i < li.length; i++) {
      e = li[i].querySelector("h4.title")
      txtValue = e.textContent || e.innerText;
      tag = li[i].querySelector("span.tag")
      tagValue = tag.textContent || tag.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 || tagValue.toLowerCase() == filter.toLowerCase()) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  export default search