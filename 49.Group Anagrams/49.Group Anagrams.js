/**
 * 解题思路：统计每个字母的出现频率
 * 1、检查输入字符串数组是否为空，为空的话，直接return空数组
 * 2、创建一个hashMap,用来分类保存anagrams,其中键为“每个单词产生的词频统计数组”，值为“具有相同词频统计数组的单词构成的数组”
 * 3、遍历输入的字符串数组：
 *      3.1、对于每一个字符串单词，需要初始化一个长度为26的全0数组，用于统计26个字母出现的次数
 *      3.2、遍历每个单词中的每个字母：
 *          3.2.1、获取每个字母的ASCII码（a是97，所以要减去97，这样26个字母就可以对于词频统计数组的0~25的索引）
 *          3.2.2、每出现一次，对应词频加1
 *      3.3、遍历完当前单词后，把对应生成的词频数组利用join()转成字符串，这样才能作为hashMap的键
 *      3.4、把当前单词分类保存到hashMap中
 *          3.4.1、如果map中有当前key的话，就把当前单词加入到其值中，同时还有拼接上之前已经放进来的单词，构成一个数组
 *          3.4.2、如果没有的话，就只把当前这个单词放进去就行，不用拼接了
 * 4、创建空数组，把map的所有值遍历提取出来，保存在这个数组中，返回这个结果数组
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 1、检查输入字符串数组是否为空，为空的话，直接return空数组
  if (strs.length === 0) {
    return [];
  }

  // 2、创建一个hashMap,用来分类保存anagrams,其中键为“每个单词产生的词频统计数组”，值为“具有相同词频统计数组的单词构成的数组”
  const map = new Map();

  // 3、遍历输入的字符串数组：
  for (let word of strs) {
    // 3.1、对于每一个字符串单词，需要初始化一个长度为26的全0数组，用于统计26个字母出现的次数
    let lettersFrequencyArray = Array(26).fill(0);
    // 3.2、遍历每个单词中的每个字母：
    for (let i = 0; i < word.length; i++) {
      // 3.2.1、获取每个字母的ASCII码（a是97，所以要减去97，这样26个字母就可以对于词频统计数组的0~25的索引）
      let ascii = word.charCodeAt(i) - 97;
      // 3.2.2、每出现一次，对应词频加1
      lettersFrequencyArray[ascii]++;
    }
    // 3.3、遍历完当前单词后，把对应生成的词频数组利用join()转成字符串，这样才能作为hashMap的键
    let key = lettersFrequencyArray.join("");
    // 3.4、把当前单词分类保存到hashMap中
    if (map.has(key)) {
      //  3.4.1、如果map中有当前key的话，就把当前单词加入到其值中，同时还有拼接上之前已经放进来的单词，构成一个数组
      map.set(key, [...map.get(key), word]);
    } else {
      // 3.4.2、如果没有的话，就只把当前这个单词放进去就行，不用拼接了
      map.set(key, [word]);
    }
  }

  // 4、创建空数组，把map的所有值遍历提取出来，保存在这个数组中，返回这个结果数组
  let result = [];
  for (let keyValue of map) {
    // 只把每项的值取出来 0代表键 1代表值
    result.push(keyValue[1]);
  }

  return result;
};
