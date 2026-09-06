#!/bin/zsh
cd /private/tmp/claude-501/-Users-yonatanzlit/eac6a763-5e18-4461-b2e5-6b2ae0e98596/scratchpad/ig
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for t in post1 post2 post3 post4 post5 post6; do
  # copy tile, append CSS that hides all art + sub + lockup, leaving only the headline
  sed 's#</style>#.char,.orb-companion,.orb-member,.orb-knob,.ring,.toggle,.dash,.arc,.chip,.blob,.underline,.avatar,.sub,.lockup{display:none!important}\n</style>#' $t.html > _tp_$t.html
  "$CHROME" --headless=new --screenshot=_tp_$t.png --window-size=1080,1350 --hide-scrollbars --force-device-scale-factor=1 file://$PWD/_tp_$t.html >/dev/null 2>&1
done
echo "type proofs rendered"
