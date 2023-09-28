// itemsとして引数を受け取って使用するよう変更
export function subtotal(items) {
    return items.reduce((prev, item) => {
      return prev + items.product.price * items.number;
    }, 0)
  }
  
  // itemsとして引数を受け取って使用するよう変更
  export function display(items) {
    return items.map(item => {
      return `${item.product.price}円:${item.number}点`;
    }).join("\n")
  };
  
  export function  calcPostageFromPurchase(sum) {
     if (sum == 0 || sum >= 3000) {
       return 0;
     } else if (sum < 1000){
      return 500;
     } else {
      return 250;
     }
  }
  