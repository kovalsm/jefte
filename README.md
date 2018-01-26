# jefte

##  Ako vybuildit appku na android?

1. Install a Java Development Kit (JDK) 
   - predpokladam ze mame
   
2. Install the Android SDK and download the required tools, platforms, and other components 
   - stiahneme Android SDK https://developer.android.com/studio/index.html - uplne dole command line tools
   - rozbalime na lubovolne (rozumne) miesto (v mojom pripade `/home/kriza/programing/androidSDK/` )
   - nasledne potrebujeme nainstalovat sdkmanagerom potrebne baliky:
      - momentalne meteor vyzaduje API level android-25 - android 7.1: `sdkmanager "platform-tools" "platforms;android-25"`
      - vypis vsetkych existujucich balikov na stiahnutie: `sdkmanager --list`
      - update: `sdkmanager --update`
      - dalsie prikazy: https://developer.android.com/studio/command-line/sdkmanager.html

3. Set ANDROID_HOME and add the tools directories to your PATH
   - upravime subor `.bashrc` tak aby po kazdom spusteni boli nastavene potrebne premenne prostredia nastevene:
   - otorime si subor `.bashrc` lubovolnym editorom a vlozime nasledujuce riadky s tym ze upravime cestu podla toho kam sme nainstalovali Android SDK:
```
# Android
export ANDROID_HOME=$HOME/programing/androidSDK
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```
   - pre aplikovanie je najlepsie sa prihlasit a odhlasit
   
   - Skontrolovat, ci mame spravne nainstalovany platform tools a nastavene premenne prostredia vieme pripojenim telefona s povolenym debuggingom a spustenim prikazu `adb devices`. Ak sa zobrazi nejake zariadenie je to v poriadku.
   
4. Optionally: Create an Android Virtual Device to run apps on an emulator
   - nerobim mam telefon 
   
5. Ak nemame nainstalujeme Gradle:
   ```
   sudo pacman -Syu gradle
   ```
6. Teraz potrenujeme pridat platformu androidu do Meteror projektu. Najprv skontrolujeme ake platformy mame pridane prikazom `meteor list-platforms`. Ak sa nam zobrazi aj android najprv ho odstranime prikazom `meteor remove-platform  android` a nasledne pridame prikazom `meteor add-platform android`. Ak vsetko prebehne v poriadku mozeme spustit aplikaciu na telefone prikazom `meteor run android-device`.
