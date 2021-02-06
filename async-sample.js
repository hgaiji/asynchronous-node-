//以下の例だとresolve1という値をreatunしているためresolveを返す
async function resolveSample1() {
    return 'resolve1'
}

//resolveSample1がPromiseを返す。→resolveとしてresolve1を返す
//thenが実行されてresolveの値が表示される
resolveSample1().then(val => {
    console.log(val)
})

//rejectする関数例
//reject!!をthrowしているため、この値をrejectする
async function rejectSample1() {
    throw new Error('reject!!')
}

//rejectSample1がPromiseを返す→reject!!がrejectされているため
//catchが実行され今ソースにreject!!が表示される
rejectSample1().catch(err => {
    console.log(err)
})

//普通の関数のため,promiseを返さない
function resolveError() {
    return 'resolveError'
}

//そのため、以下はエラーとなる
resolveError().then(val => {
    console.log(val)
})

