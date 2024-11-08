 export default function binarySearch(arr, target) {  
  let left = 0;
  let right = arr.length -1;
  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if(target === arr[mid]){
      return mid;
    }else if(target < arr[mid]){
      right = mid -1
    }else if(target > arr[mid]){
      left = mid + 1
    }
  }
  return -1;
}

// 2nd way:- recursive way

export default function binarySearch(arr,target) {
  return binarySearchImp(arr,target,0,arr.length-1)
}

function binarySearchImp (arr,target,left,right){
  if(left > right){
    return -1
  }
  while(left <=right){
    const mid = Math.floor((left+right)/2);
    if(target === arr[mid]){
      return mid;
    }else if(target < arr[mid]){
      return binarySearchImp(arr,target, left, mid-1)
    }else if(target > arr[mid]){
      return binarySearchImp(arr,target,mid+1, right)
    }
  }
}