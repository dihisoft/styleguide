/**
 * NOTE 서버 컴포넌트에서 사용하는 API 모음
 *
 * 해당 함수에서 데이터 변환까지 해서 클라이언트 컴포넌트가 데이터를 바로 활용할 수 있도록 해준다.
 *
 */
export const getIdList = async (): Promise<{
  idList: string[];
}> => {
  const res = await fetch(
    'https://api.github.com/users/xiaotian/repos',
  );
  await new Promise(r => {
    setTimeout(r, 5000); // NOTE - 실제로는 fetch를 사용하여 데이터를 가져오는 시간이 걸린다고 가정
  });
  const reposData = await res.json();
  const idList = reposData.map(
    (item: { id: string }) => item.id,
  );
  return { idList };
};

// NOTE - 아래는 제네릭을 사용하여 데이터 변환을 할 수 있는 방법이다.
// type Repo = {
//   id: string;
//   name: string;
//   comment: string;
// }

// type Converter<Response extends object> = {
//   (reo: Repo):
// }
// export const getIdList = async <Response extends object>(converter: Converter<Response>): Promise<{
//   idList: string[];
// }> => {
//   const res = await fetch(
//     'https://api.github.com/users/xiaotian/repos',
//   );
//   await new Promise(r => {
//     setTimeout(r, 5000); // NOTE - 실제로는 fetch를 사용하여 데이터를 가져오는 시간이 걸린다고 가정
//   });
//   const reposData = await res.json() as Array<Repo>;
//   const idList = reposData.map(
//     converter
//   );
//   return { idList };
// };

// getIdList((repo) => ({ id: repo.id, name: repo.name}));
// getIdList((repo) => ({ id: repo.id, comment: repo.comment}));
