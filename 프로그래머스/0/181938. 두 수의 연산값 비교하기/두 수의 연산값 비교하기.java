class Solution {
    public int solution(int a, int b) {
        int num = Integer.parseInt(Integer.toString(a) + Integer.toString(b));
        
        return Math.max((2 * a * b), num);
    }
}