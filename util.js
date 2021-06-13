// 문제 풀이를 시작한 뒤 경과 일(ordinalDay:Number)을 입력
// 예: 1 -> getReviewGroupByOrinalDay(1): 첫째 날 리뷰 그룹 출력
export function getReviewGroupByOrinalDay(members, ordinalDay) {
  let codeReviewA = members.slice(0, -ordinalDay);
  let codeReviewB = members.slice(ordinalDay);

  codeReviewA.unshift(...members.slice(-ordinalDay));
  codeReviewB.push(...members.slice(0, ordinalDay));

  return { members, codeReviewA, codeReviewB };
}
