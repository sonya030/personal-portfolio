//메일 주소 복사하기
document.getElementById("copyMail").addEventListener("click", function () {
  const email = document.getElementById("mailAdress").innerText;
  navigator.clipboard.writeText(email).then(
    function () {
      alert("메일 주소가 복사되었습니다😊");
    },
    function (err) {
      console.error("복사에 실패했습니다😥", err);
    }
  );
});
