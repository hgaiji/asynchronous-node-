function sampleResolve(val) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(val * 2)
        }, 1000)
    })
}

function throwError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("エラーがあったよ")
                resolve('エラーなし')
            } catch (err) {
                reject(err);
            }
        }, 1000)
    })
}
/**
 * sampleResolve()をawaitしているため、Promiseの結果が返されるまで処理が一時停止される
 * 今回の場合、2秒後にresolve(10)が返ってきてその後の処理（return result + 5;）が再開される
 * resultにはresolveされた10が格納されているため、result + 5 = 15がreturnされる
 */
async function sample() {
    const result = await sampleResolve(5)
    console.log(result)
    console.log("fff")
    return result + 5

}

//連続した非同期処理(promiseに比べて完結に記述できる)
async function sample2() {
    const a = await sampleResolve(5)
    const b = await sampleResolve(10)
    const c = await sampleResolve(20)
    return a + b + c
}

//例外処理
async function errorHandling() {
    try {
        const result = await throwError()
        return result
    } catch (err) {
        throw err
    }
}

sample().then(res => {
    console.log(res)
})

sample2().then(v => {
    console.log(v)
})

errorHandling().catch(err => {
    console.log(err)
})
