# jefte

##  Ako vybuildit appku na android?

* Install a Java Development Kit (JDK) 
  * predpokladam ze mame
* Install the Android SDK and download the required tools, platforms, and other components (which is done most easily by installing Android Studio)
  * stiahneme Android SDK https://developer.android.com/studio/index.html - uplne dole command line tools
  * rozbalime na lubovolne (rozumne) miesto (v mojom pripade `/home/kriza/programing/androidSDK/` )
  * nasledne potrebujeme nainstalovat sdkmanagerom potrebne baliky:
  - dajme tomu ze vyvijame na android 5.1:
> sdkmanager "platform-tools" "platforms;android-22"
  - vypis vsetkych existujucich balikov na stiahnutie:
> sdkmanager --list
  - update:
> sdkmanager --update
  - dalsie prikazy: https://developer.android.com/studio/command-line/sdkmanager.html#update_all_installed_packages
* Set ANDROID_HOME and add the tools directories to your PATH
* Optionally: Create an Android Virtual Device to run apps on an emulator
* If Gradle cannot be found: try using a package manager such as Homebrew, apt-get, or yum to install a system-wide, standalone version of gradle:
