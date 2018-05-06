/**
 * Immediately invoked function that prints a meal and drink that has
 * been chosen by the user
 *
 * @author: Jessica Nierth
 * @date: 2/18/2017
 */
(function() {
    "use strict";

    var domTale = document.getElementById('tale'),
        tale = '"Was wir schon immer wussten... \n\nEin Rabe sitzt im Wald auf' +
        'einem Ast.\n\nKommt ein zweiter Rabe vorbei und fragt: "Was machst du denn ' +
        'da?\n"Nix, ich sitz nur da und schau blöd."\n"Klingt gut, das mach ' +
        'ich auch\".\nUnd der zweite Rabe setzt sich neben den ersten auf den ' +
        'Ast.\n\nKurze Zeit später kommt ein Hase daher und sieht die beiden' +
        ' Raben.\n"Was macht ihr denn da?" n" Nix, wir sitzen nur da und schauen ' +
        'blöd."\n"Das will ich auch probieren," sagt der Hase und hockt sich ' +
        'unter den Ast.\n\nEs dauert nicht lange, da kommt ein Fuchs des ' +
        'Weges.\nEr sieht den Hasen und die beiden Raben und fragt: "Was macht' +
        'ihr denn da?"\n"Nix, wir sitzen nur da und schauen blöd," erklärt ihm ' +
        'der Hase.\n"Aha," meint der Fuchs und gesellt sich zum Hasen.\n\nSo' +
        ' hocken alle vier da, machen nix und schauen blöd, bis ein Jäger vorbeikommt' +
        ' und den Fuchs und den Hasen erschießt.\n\n"Siehst, was ich ' +
        'immer sag," meint der eine Rabe zum ' +
        'anderen, "nix tun und blöd schauen\ngeht nur in einer höheren ' +
        'Position."\n"';

    domTale.innerHTML = tale;
})();