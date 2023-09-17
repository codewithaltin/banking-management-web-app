package com.bimi.bankingsystem.common.enums;

import java.awt.*;
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public enum City {
    Prishtine,
    Prizren,
    Ferizaj,
    Peje,
    Gjakove,
    Gjilan,
    Mitrovice,
    Podujeve,
    Vushtrri,
    Suhareke,
    Rahovec,
    Drenas,
    Lipjan,
    Malisheve,
    Kamenice,
    Viti,
    Deqan,
    Istog,
    Kline,
    Skenderaj,
    Fushekosove,
    Shtime,
    Obiliq;

    public static String[] getNames(Class<? extends Enum<?>> e) {
        return Arrays.stream(e.getEnumConstants()).map(Enum::name).toArray(String[]::new);
    }

}
