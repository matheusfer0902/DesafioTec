#include <iostream>

using namespace std;

bool calcFibonacci(int num){
    bool flag = false;
    int a = 0, b = 1;
    cout << a << " " << b << " ";

    if(num == 0 || num == 1){
        return true;
    }

    for (int i = 2; i <= num; ++i) {
        int next = a + b;
        cout << next << " ";
        a = b;
        b = next;
        if(next == num){
            flag = true;
        }
    }

    return flag;
}

int main() {

    int numeroParaVerificar;

    cout << "Digite o numero que voce quer verificar: ";
    cin >> numeroParaVerificar;

    if(calcFibonacci(numeroParaVerificar)){
        cout << endl << "O numero " << numeroParaVerificar << " esta na sequencia" << endl;
    } else {
        cout << endl << "O numero " << numeroParaVerificar << " nao esta na sequencia" << endl;
    }
    
    return 0;
}
