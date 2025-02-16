#include<iostream.h>
void swap(int&x,int&y);
void main()
{
    int a,b;
    cout<<"Enter the values of a and b">>;
    cin>>a>>b;
    swap(a,b);
    cout<<"After swapping"<<emdl;
    cout<<"a="<<a;
    cout<<"b="<<b
}
void swap(int&x,int&y)
{
    int temp=x;
    x=y;
    y=temp;
}