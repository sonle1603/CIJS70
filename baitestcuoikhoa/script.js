//bai1: 
let n = [2, 3, -5, -2, 4];
let max = -1000;
for (let i = 0; i < n.length; i ++) {
    for (let j = i + 1; j < i + 2; j++){
        if (n[i] * n[j] > max) max = n[i] * n[j];
    }
}
console.log("So lon nhat co tich bang "+ max); 
// //2.Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

const arr=[{
  name: 'A',
  weight: 50
},{
  name: 'B',
  weight: 40
},
{
  name: 'C',
  weight: 20
},
{
  name: 'D',
  weight: 60
},
{
  name: 'E',
  weight: 40
},
];
let team1=0;
let team2=0;
for (i=0; i<arr.length;i++){
  if(i%2==0)team1+=arr[i].weight
  else team2+=arr[i].weight
}     
console.log("Team 1 tổng cân nặng là "+team1+" kg")
console.log("Team 1 tổng cân nặng là "+team2+" kg")


/* B :Code Challenge (60’)*/
function myFunction() {
  const color = document.getElementById("bodycolor").value;
    document.body.style.backgroundColor = color;
}