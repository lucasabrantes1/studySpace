package br.com.digital.innovation.one.aula6;

import java.util.stream.Collectors;

//usando o metodo line()
public class StringLineExemplo {
    public static void main(String[] args) {
        String html = "<html>\n<head>\n</head>\n<body>\n</body>\n</html>";
        System.out.println(html.lines().filter(l-> l.contains("body")).collect(Collectors.joining()));
        System.out.println(html.lines().map(l->"[tag]::" + l).collect(Collectors.joining()));
        System.out.println();
        System.out.println("HTML:".concat("\n"+html));
        System.out.println(html.lines().map(l->l.toUpperCase()).collect(Collectors.joining()));

    }
}
