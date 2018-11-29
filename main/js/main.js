
    var tris_W = 221.7,
        tris_H = 193;
/*
    document.getElementById('main').style.width = (2 * tris_W);
    document.getElementById('main').style.height = (2 * tris_H);
*/


    var flag = 1;

    function phoenix() {
      if (flag === 1) {
        flag = 0;
        document.getElementById('main').style = "transform: translateY(0px);";

        document.getElementsByClassName('hidde')[0].style = "transform: translateX(110.85px); opacity: 1;";
        document.getElementsByClassName('hidde')[1].style = "transform: translateY(193px); opacity: 1;";
        document.getElementsByClassName('hidde')[2].style = "transform: translateX(-110.85px); opacity: 1;";

      }
      else {
        flag = 1;
        document.getElementById('main').style = "transform: translateY(0px);";

        document.getElementsByClassName('hidde')[0].style = "transform: translateX(110.85px); opacity: 0;";
        document.getElementsByClassName('hidde')[1].style = "transform: translateY(193px); opacity: 0;";
        document.getElementsByClassName('hidde')[2].style = "transform: translateX(-110.85px); opacity: 0;";

      }
    }




    function bio() {
      if (flag === 1) {
        flag = 0;
        document.getElementById('main').style = "transform: translate(0px, 0px);";
      }
      else {
        flag = 1;
        document.getElementById('main').style = "transform: translate(0px, " + (tris_H * -1) + "px);";
        console.log(tris_H * -1);
      }
    }




    function contact() {
      if (flag === 1) {
        flag = 0;
        //document.getElementById('main').style = "transform: translate(" + (tris_W/2) +"px, 0px);";
        document.getElementById('main').style = "transform: translate(" + 722 +"px, " + -150 + "px);";
        document.getElementById('main').style.width = ((tris_W * 2) + 200);
        document.getElementsByClassName('container')[0].style.opacity = 1;

        document.getElementsByClassName('line')[0].style = "stroke-dashoffset: 0;";
        document.getElementsByClassName('txt')[0].style.height = "800px";
        //document.getElementById('C_contact').style = "transition: opacity ease 0.3s; transition-delay: 0.3s; opacity: 1; position: absolute; transform: translate(" + (tris_W/2)*-1 + "px, " + (tris_H)*-1 + "px);";
      }
      else {
        flag = 1;
        document.getElementById('main').style = "transform: translate(0px, 0px); transition-delay: 0.3s;";
        document.getElementsByClassName('container')[0].style = "opacity: 0; transition-delay: 0.3s;";
        //document.getElementById('C_contact').style = "opacity: 0;"

        document.getElementsByClassName('line')[0].style = "stroke-dashoffset: -1000;";
        document.getElementsByClassName('txt')[0].style.height = "0px";
      }
    }




    function creation() {
      if (flag === 1) {
        flag = 0;
        document.getElementById('main').style = "transform: translate(" + (tris_W/2)* -1 + "px, 0px);";
      }
      else {
        flag = 1;
        document.getElementById('main').style = "transform: translate(0px, 0px);";
      }
    }
