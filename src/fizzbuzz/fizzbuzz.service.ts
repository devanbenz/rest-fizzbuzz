import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {
    fizzbuzz(n: number): Array<number | string> {
        let fbArr: Array<number | string> = []
        for(let i: number = 1; i <= n; i++){
            if(i % 3 === 0 && i % 5 === 0){
                fbArr.push('fizzbuzz')
            }
            else if(i % 3 === 0){
                fbArr.push('fizz')
            }else if(i % 5 === 0){
                fbArr.push('buzz')
            }else {
                fbArr.push(i)
            }
        }
        return fbArr
    }
}
