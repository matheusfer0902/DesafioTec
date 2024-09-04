#include <iostream>

using namespace std;


int main() {
    int indice = 13;
    int soma = 0;

    for (int k = 0; k < indice; k++)
    {
        soma = soma + k;
        cout << "Soma atual com k = " << k << ", soma = " << soma << endl;
    }

    cout << "O valor final da soma e: " << soma << endl;
    
    return 0;
}
