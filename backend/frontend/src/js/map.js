const container = document.getElementById("map");
const options = {
  center: new kakao.maps.LatLng(37.39808393961005, 126.64802612114711),
  level: 3,
};

const map = new kakao.maps.Map(container, options);

const markerPosition = new kakao.maps.LatLng(
  37.39808393961005,
  126.64802612114711
);
const marker = new kakao.maps.Marker({
  position: markerPosition,
});
marker.setMap(map);

const iwContent =
    '<div style="padding:5px;">컴세바 써니랩학원 <br>인천지점<br><a href="https://map.kakao.com/link/map/컴세바 써니랩학원 인천지점,37.39808393961005, 126.64802612114711" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/컴세바 써니랩학원 인천지점,37.39808393961005, 126.64802612114711" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwPosition = new kakao.maps.LatLng(33.450701, 126.570667);

const infowindow = new kakao.maps.InfoWindow({
  position: iwPosition,
  content: iwContent,
});

infowindow.open(map, marker);
