function open(address) {
  const iframe = document.getElementById("websiteFrame");
  iframe.src = address;
  document.getElementById("website").style.display = "none";
  document.getElementById("open").style.display = "none";
}
document.getElementById("open").onclick = () => {
  open(document.getElementById("website").value);
};
