// @parameter:{number} 문제 풀이를 시작한 뒤 경과 일을 입력, 1 -> 첫째 날 리뷰 그룹 출력
function printNextReviewGroup(members, ordinalDay) {
  let reviewGroupA = members.slice(0, -ordinalDay);
  let reviewGroupB = members.slice(ordinalDay);

  reviewGroupA.unshift(...members.slice(-ordinalDay));
  reviewGroupB.push(...members.slice(0, ordinalDay));

  for (let i = 0; i < members.length; i++) {
    console.log(members[i], reviewGroupA[i], reviewGroupB[i]);
  }

  return [members, reviewGroupA, reviewGroupB];
}

printNextReviewGroup(members, 3);
