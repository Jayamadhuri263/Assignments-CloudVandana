import java.util.*;  
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); 
        String myString = sc.nextLine();
        String letter = sc.nextLine();
        int index = myString.indexOf(letter);
        //System.out.println(index);
        if (myString.contains(letter)) {
            System.out.println(myString.substring(index+1));
        }else{
            System.out.println("The letter does not exist in the sentence");
        }
    }
}