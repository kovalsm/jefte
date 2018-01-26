# jefte

##  Ako vybuildit appku na android?

1. Install a Java Development Kit (JDK) 
   - predpokladam ze mame
   
2. Install the Android SDK and download the required tools, platforms, and other components (which is done most easily by installing Android Studio)
   - stiahneme Android SDK https://developer.android.com/studio/index.html - uplne dole command line tools
   - rozbalime na lubovolne (rozumne) miesto (v mojom pripade `/home/kriza/programing/androidSDK/` )
   - nasledne potrebujeme nainstalovat sdkmanagerom potrebne baliky:
      - dajme tomu ze vyvijame na android 5.1: `sdkmanager "platform-tools" "platforms;android-22"`
      - vypis vsetkych existujucich balikov na stiahnutie: `sdkmanager --list`
      - update: `sdkmanager --update`
      - dalsie prikazy: `https://developer.android.com/studio/command-line/sdkmanager.html#update_all_installed_packages`

3. Set ANDROID_HOME and add the tools directories to your PATH
   - upravime subor `.bashrc` tak aby po kazdom spusteni boli nastavene potrebne premenne prostredia nastevene:
   - otorime si subor `.bashrc` lubovolnym editorom a vlozime nasledujuce riadky s tym ze upravime cestu podla toho kam sme nainstalovali Android SDK:
```
# Android
export ANDROID_HOME=$HOME/programing/androidSDK
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

4. Optionally: Create an Android Virtual Device to run apps on an emulator
   - nerobim mam telefon 
5. Ak nemame nainstalujeme Gradle:
   ```
   sudo pacman -Syu gradle
   ```
