'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "df1ca0a3472e1afcd137d615a756ceb4",
"assets/AssetManifest.bin.json": "b0881330609204b574fe72f11d1e11ec",
"assets/AssetManifest.json": "bd24e3372e9bf284408055ad5a18e617",
"assets/assets/audio/clickAudio.wav": "6b6e53d2c960bcdd64fe8afc4bb3190e",
"assets/assets/dictionary/CSV.csv": "1711d2669e65618aee2a8eae6461e3f5",
"assets/assets/dictionary/DOCX.docx": "4619cfa0a7a23ee039c84cd3be2edca5",
"assets/assets/dictionary/GIF.gif": "5e52b0f10926515f21fbddc1aa647bdf",
"assets/assets/dictionary/JPG.jpg": "87750393630f6ecd90ae05543a5e2346",
"assets/assets/dictionary/PDF.pdf": "4e6dc0d062ef0ac532ecdc129dc3cf89",
"assets/assets/dictionary/PNG.png": "17b31d4140b5ac784baf168cf49533e2",
"assets/assets/dictionary/TXT.txt": "1f025e215059e9e986ccd05be0e775f7",
"assets/assets/dictionary/WEBP.webp": "d23d8df935a3cbd7af8fb700e3b7870d",
"assets/assets/dictionary/XLSX.xlsx": "c6390ff0dafd82103382a5f8195aecec",
"assets/assets/dictionary/Zip.zip": "53d1fd5ad4d87cef87bca640c93095ff",
"assets/assets/docs/CST%2520Definitions.docx": "abca362da75d1cb23b29d7228071938d",
"assets/assets/fonts/kokilai.ttf": "b7e6414813ab300059f544b4d7005d61",
"assets/assets/fonts/kokila_regular.ttf": "e81d8414c1ffcdca76decbe30bda10a9",
"assets/assets/fonts/libertinusserif-regular.otf": "2cfcdbd569ec4ca2a4afbf3943fc0017",
"assets/assets/fonts/Madina.ttf": "858c4d9700ca42673cbbb2b701476f54",
"assets/assets/fonts/Rubik/Rubik-Black.ttf": "2a3b9f77607c7b691e81090c4edba341",
"assets/assets/fonts/Rubik/Rubik-Bold.ttf": "627d0e537f4a06a535ae956e4a87837f",
"assets/assets/fonts/Rubik/Rubik-ExtraBold.ttf": "34215c81c17466f7aa764b441fa348df",
"assets/assets/fonts/Rubik/Rubik-Light.ttf": "86699cab89559b6f5ffd4887cb5c7a7c",
"assets/assets/fonts/Rubik/Rubik-Medium.ttf": "e785acbf5775e9bec2129f4967a75472",
"assets/assets/fonts/Rubik/Rubik-Regular.ttf": "46df28800514364ef2766f74386b1bd3",
"assets/assets/fonts/Rubik/Rubik-SemiBold.ttf": "742cf1e6b879de2de937aa287fddece4",
"assets/assets/images/cetificate.png": "9e52ce27b14a018cb944b57f3eef976f",
"assets/assets/images/downIcon.png": "385f68a3df3c16f8573fc0d895e5c11c",
"assets/assets/images/FeaturedIcon.png": "eedb6fc274de35945cdd99e42018a263",
"assets/assets/images/pmpHome.png": "54c40b9c15f31316914b44ede462404a",
"assets/assets/images/pmpHomeBlue.png": "51724fbfe21a4d43e69da1cc23bdf184",
"assets/assets/images/powerdByImage.png": "378cdf21286cfd57fc148669e00afca1",
"assets/assets/images/QRCodePMP2.png": "76f31ceab8c41597b3e8b3b6c92b2a9f",
"assets/assets/images/splashLogo.png": "9cb0fabca613332459e10c9dc8158974",
"assets/assets/images/upIcon.png": "74444cca264ecf14e9d2df3049a43d50",
"assets/assets/new_gif/Progress0v3_BG.gif": "8e4000da4f21fb0cc83f8676f28b8e76",
"assets/assets/new_gif/Progress0v3_Head.gif": "0a1d7dc73ac2172749b2134ffa7215e2",
"assets/assets/new_gif/Progress100v3_BG.gif": "e3e201e0fc7e65dd84858ed814fe6866",
"assets/assets/new_gif/Progress100v3_Head.gif": "e5b38bcc53ab86b51816028b7576da79",
"assets/assets/new_gif/Progress10v3_BG.gif": "3f31c145031af15deaca8676fb21e244",
"assets/assets/new_gif/Progress10v3_Head.gif": "64723cf144b8253a87ecff6469c0d55d",
"assets/assets/new_gif/Progress20v3_BG.gif": "a904844f20df373695617a9fb05d4170",
"assets/assets/new_gif/Progress20v3_Head.gif": "dc0b93b963c5e6df784014e05fb8b10c",
"assets/assets/new_gif/Progress30v3_BG.gif": "835f0b96afb413deeac51c37c951b3b8",
"assets/assets/new_gif/Progress30v3_Head.gif": "c66d5b2e6815f486e28e785b46c0c21f",
"assets/assets/new_gif/Progress40v3_BG.gif": "8f1e523d5406d1fe14d5555d1b156984",
"assets/assets/new_gif/Progress40v3_Head.gif": "f91e4f3daf413708e54b11e0f0dea371",
"assets/assets/new_gif/Progress50v3_BG.gif": "834d2a9823d641ba1452da592122225f",
"assets/assets/new_gif/Progress50v3_Head.gif": "0acb178bd3514442301758b88762d991",
"assets/assets/new_gif/Progress60v3_BG.gif": "e109f391a03ea1737f8272bad6aa9d32",
"assets/assets/new_gif/Progress60v3_Head.gif": "123f42cb74661d571222c27e72b971fe",
"assets/assets/new_gif/Progress70v3_BG.gif": "21f79d9b1bb2efefab47113d53209d8c",
"assets/assets/new_gif/Progress70v3_Head.gif": "7b8b9dd259febe34274c71bd19fb704a",
"assets/assets/new_gif/Progress80v3_BG.gif": "9d562dcd2e5c3c5608c09ea1442c1085",
"assets/assets/new_gif/Progress80v3_Head.gif": "175c76018da10f2655339cc1621c7d72",
"assets/assets/new_gif/Progress90v3_BG.gif": "223c342934ed7b54f58d4362a2d04481",
"assets/assets/new_gif/Progress90v3_Head.gif": "151f4eddd7edb71b08deff9fe39d0998",
"assets/assets/no_internet/no_internet.json": "63c7cfda61cf3145db7a58bd34e92dfc",
"assets/assets/profile/profile.json": "13dd3334bcef04df56e1a1026d0d8fe6",
"assets/assets/svg/AdFree.svg": "1a2c1e8865ec8c16db91df2e7bd34af4",
"assets/assets/svg/AdFreeWhite.svg": "d7ac7a3d34a6b6a5180abfbb6f61238e",
"assets/assets/svg/AtBlack.svg": "42fcfd8fdc73f6ce0f22fd185de0d8ca",
"assets/assets/svg/AtWhite.svg": "51ec0d92a688741b8cfbcdce85383880",
"assets/assets/svg/Back.svg": "2df6099b88a76a044212128c3dc95d0e",
"assets/assets/svg/BackedUp.svg": "89bb76744e9524c6c3edc6d41d472cb4",
"assets/assets/svg/BackedUpWhite.svg": "9ea5125ec8d187cc2305c76c8a8ca36f",
"assets/assets/svg/BackWhite.svg": "e4da1d1bc7aefde4f6388b414f083d4b",
"assets/assets/svg/Back_White.svg": "3df1b3fa6c345b22f81c3730e02fed2a",
"assets/assets/svg/badge2.svg": "6a22591f44609040bfb822ae9a84bd51",
"assets/assets/svg/certificateSVG.svg": "a3d21e5cf5b38eef8b71e45fcc03129e",
"assets/assets/svg/ChangeName.svg": "d382355f3dec07ede23279307f836b3e",
"assets/assets/svg/ChangeNameWhite.svg": "871670b3b86ab850930d59ff362ef01e",
"assets/assets/svg/ChangePassword.svg": "948d82d333e232e1713be163cd3f0b9d",
"assets/assets/svg/ChangePasswordWhite.svg": "39e425d5e253f9d8d9b765cafac0f0e5",
"assets/assets/svg/checkSVG.svg": "f69b44aaa755f68130911830db56ca03",
"assets/assets/svg/ClipboardOrange.svg": "11f8591f6e27631d73aefd5204fe70d2",
"assets/assets/svg/ClockBlue.svg": "7dd2f60c0f567c7b19a4c8a22cafdc7c",
"assets/assets/svg/ClockPauseWhite.svg": "0fe44dea9a36d18ec5968f708c043b6c",
"assets/assets/svg/ClockWhite.svg": "b6aca0e11d47f1868d5e148a3beda41d",
"assets/assets/svg/Close1.svg": "5d757726dc0c9768b3f76ad9838c5ce7",
"assets/assets/svg/Contact.svg": "cf8cacfd9e274d86939f93ba67cf9c0b",
"assets/assets/svg/ContactWhite.svg": "158606eae72b10688f404eccc0a48f29",
"assets/assets/svg/Crown.svg": "36db425b6ad09ea280b5bfb6963ecd5e",
"assets/assets/svg/CrownWhite.svg": "f8d42e4ded55dd198e5cbabdb2476bc5",
"assets/assets/svg/csvThumb.svg": "c3b47f61e28f317e7bb2f2f584424c3b",
"assets/assets/svg/DeleteAccount.svg": "52aaf43d5306e7dadb51797407c4413c",
"assets/assets/svg/DeleteAccountWhite.svg": "90e8dd804a416d85780a9aa2e048d633",
"assets/assets/svg/DictionaryOff.svg": "995c969a0b2377520fe62bad862648bd",
"assets/assets/svg/DictionaryOffWhite.svg": "8acaf9c57b43b4584eb0dff57653162b",
"assets/assets/svg/DictionaryOn.svg": "429621d0de0fdd549b2d07ceb0acd211",
"assets/assets/svg/DictionaryOnWhite.svg": "f41c73c479b22309af0be92185cd74f6",
"assets/assets/svg/docxThumb.svg": "3c2f7dbe9945f5764d85b48c7a7e1c52",
"assets/assets/svg/Download.svg": "5888a2244bf1c1eeb32d3b73bc49cc23",
"assets/assets/svg/Downloadable.svg": "6759c99438d0b698b73006e1904e8003",
"assets/assets/svg/DownloadableWhite.svg": "49263527e02735d07059b9a8110358a1",
"assets/assets/svg/DownloadWhite.svg": "173a0490fcc691aac6f0ed4abb8ece1a",
"assets/assets/svg/EyeClosed.svg": "e89d4ce0209525a32d5ac0fc6102bf5a",
"assets/assets/svg/EyeOpen.svg": "bb33d8cbf8933f3a12de5d3ad834a4c1",
"assets/assets/svg/FlagOffBlack.svg": "53e7972e6e0a5d812e9bd87e76b40565",
"assets/assets/svg/FlagOffWhite.svg": "8e2712a3e12df81630b1bb7ae33b320e",
"assets/assets/svg/FlagOnBlack.svg": "5e8a643d7878865e994889728cdb70cb",
"assets/assets/svg/FlagOnWhite.svg": "ec9e534b5542823e08a01f0c9bf744c7",
"assets/assets/svg/FolderClosed.svg": "36ba02e392df37d984d0c55064cb719c",
"assets/assets/svg/FolderClosedWhite.svg": "a9dd789d5dcd769dc41f3d07ffe4aa41",
"assets/assets/svg/FolderOpen.svg": "c88a8bc5f3ad4c6818474b8f36c72c2f",
"assets/assets/svg/FolderOpenWhite.svg": "4cf365e1819ed9b4650544dcd700a3e6",
"assets/assets/svg/GreenCheckmark.svg": "ca127dbe51063e8a32962f03fb4a7dfc",
"assets/assets/svg/infobox.svg": "f666a71a0ad9a26b44cb9b29219c8922",
"assets/assets/svg/infoboxwhite.svg": "2d5d4af7634d3b60d2e07d1f3593343a",
"assets/assets/svg/left_arrow.svg": "53b2402b962ff051ed6486dfcfe248a4",
"assets/assets/svg/Legal.svg": "597f5ea7f7189fcd3f8b45c5a2a054de",
"assets/assets/svg/LegalWhite.svg": "7ec25072341b5dabb5ac684d8ae52e52",
"assets/assets/svg/LinkToLocal.svg": "4f59f59db6e4a3d6494fabb79ca4d81d",
"assets/assets/svg/LinkToLocalWhite.svg": "15e6f8ad21d6eebec2302a548fed1cdc",
"assets/assets/svg/Locked.svg": "a2baa7f2e0fe09abc0cd66e1e12b65f0",
"assets/assets/svg/LockedWhite.svg": "745a1e169fc8272de4abf05c6cb650e9",
"assets/assets/svg/Logout.svg": "b138366f2a227a4dd675781355a64925",
"assets/assets/svg/LogoutWhite.svg": "b860f43b9db9cbe1c6f7884802180ac8",
"assets/assets/svg/pdfThumb.svg": "42564d03d9f0c3d5ecc78e53ef95b93b",
"assets/assets/svg/Quizzes.svg": "7858df536ef93cff45e658ee03d93c5c",
"assets/assets/svg/QuizzesWhite.svg": "cfc795f60a8c48d8ccf2153bf6f8f405",
"assets/assets/svg/refreshIcon.svg": "7b0cad66004febde532d032ef38db83e",
"assets/assets/svg/Reset.svg": "186c22a0a139e204d0c708e78e0647b7",
"assets/assets/svg/ResetWhite.svg": "e4e97b4ad7b68838716d6d76a5a3fe95",
"assets/assets/svg/RotateLarge1.svg": "29d036b6bf889e95fc3a4ced1f06672d",
"assets/assets/svg/RotateSmall1.svg": "ed95b9f35d9ea99b573bce677b4c0a34",
"assets/assets/svg/scaleSVG.svg": "de6861d622fb13857a84683e4b43f82f",
"assets/assets/svg/Server1.svg": "4c8ed3491ab7bc525da8752dafd9d6bc",
"assets/assets/svg/Server1White.svg": "0b6108d37184872997c309a222fec39a",
"assets/assets/svg/Server2.svg": "cb1f23b28643cb853b369c32b042f7e6",
"assets/assets/svg/Server2White.svg": "2bfd83c2a8bba426ae2ca9cd263322b5",
"assets/assets/svg/ServerOff.svg": "723f88fc537c752e651a0b187dae90e8",
"assets/assets/svg/ServerOffWhite.svg": "cd340bc761911e0974cfc2d86dbc7dc3",
"assets/assets/svg/Settings.svg": "5264c7cb3f6a0c3f04a3dca31236e7d6",
"assets/assets/svg/SettingsBlack.svg": "be0c4e05faa6179fabfc6ebd8f3d2c3e",
"assets/assets/svg/SettingsWhite.svg": "9eb71b747d097a22f764c814181c74fe",
"assets/assets/svg/ShowSolutionOn.svg": "ca9f5dd91cae7032ffb289845ff420da",
"assets/assets/svg/ShowSolutionOnWhite.svg": "82840eb8fa4243622b1bbbef90f8d0fc",
"assets/assets/svg/ShowSolutionsOff.svg": "eb3fc5944570b1edd087e148ed834a8a",
"assets/assets/svg/ShowSolutionsOffWhite.svg": "8b0ef3f199250da0584342203bb67922",
"assets/assets/svg/Signup.svg": "03db3ccda1aa279d77ecaf325cc7c15f",
"assets/assets/svg/SignupWhite.svg": "be14cf713e0e87a5330d6dfd317fc0b9",
"assets/assets/svg/SubmitAnswers.svg": "358d830e70406e75770f16c2ce9ba955",
"assets/assets/svg/SubmitAnswersOn.svg": "6236316d7b40cf74c488d426a22f331d",
"assets/assets/svg/SubmitAnswersOnWhite.svg": "beb03fc1db20d5ca03cfc6a0b043a532",
"assets/assets/svg/SubmitAnswersWhite.svg": "52891a7ea9df307d4c76cb5c0ad9dadc",
"assets/assets/svg/Support.svg": "f12f2fd0fea2c1582d3512ed127acf99",
"assets/assets/svg/SupportWhite.svg": "a6a4238277ead8e0274bd7a0f59fc9b3",
"assets/assets/svg/TextBlack.svg": "5663c142bbbb10c77ecf35012b1213a6",
"assets/assets/svg/TextWhite.svg": "df74aa7bec1ddd201163a1e22b4ce834",
"assets/assets/svg/ThemeDark.svg": "a3b1a73978bce68842568dc8d5ef8900",
"assets/assets/svg/ThemeLight.svg": "4c4c5f8e5341d868eeb829730b1db31f",
"assets/assets/svg/Train.svg": "27701222f2206181b2c71f625f92ae27",
"assets/assets/svg/TrainOff.svg": "66d41b3bb5d6259290d7a515ff578fa8",
"assets/assets/svg/TrainOffWhite.svg": "2cbb7fe51b37066c51516bb70e64058f",
"assets/assets/svg/TrainWhite.svg": "29ab7cbd9356c77642b82c19fdfaf0d5",
"assets/assets/svg/txtThumb.svg": "0dcde6970db311bd6ed0d9df785522b2",
"assets/assets/svg/united_states_logo.svg": "9475d115a025f5b5f0a3aa8f5d0d460c",
"assets/assets/svg/Unlock.svg": "c1555a448671bacd46cab13f62293ee0",
"assets/assets/svg/UnlockWhite.svg": "17b0004ce48834c978d5c4d0cb342ad1",
"assets/assets/svg/Updates.svg": "d470f9032492a8636b57e58b43153bc7",
"assets/assets/svg/UpdatesWhite.svg": "60cb212d6c6aaa1a6ee73d3e72fa0818",
"assets/assets/svg/verified.svg": "6793ad72d0d45a989d76e4a54a0737c1",
"assets/assets/svg/xlsxThumb.svg": "90234e3737ff1923863b84a2950c609e",
"assets/assets/svg/zipThumb.svg": "5c757bcb7d5be74e8d000cc904fa0bfb",
"assets/assets/svg_images/back_arrow.svg": "307f7905be4859a7d6e1f53271ea3b5c",
"assets/assets/svg_images/badge2.svg": "1d39b89dea739290aefc9dd8df6d331b",
"assets/assets/svg_images/ClipboardOrange.svg": "d5eaf857f2e27359a42e782ad70747f8",
"assets/assets/svg_images/crown.svg": "84bd34a19c825ac81373259b104e0634",
"assets/assets/svg_images/left_arrow.svg": "7169de2a332c578b85fe286f2290757a",
"assets/assets/svg_images/lock.svg": "b6347ae58cb92c2107eea8af4a21872e",
"assets/assets/svg_images/pmp_logo.svg": "e8f987b12b476845a7bfe5bdc0ec95d9",
"assets/assets/svg_images/profile_settings.svg": "7bbd753534756e68b36782589bf32fc2",
"assets/assets/svg_images/tab1.svg": "030ed1b0e4a2224e1c9da284b2c383fe",
"assets/assets/svg_images/tab1_highlight.svg": "5acc9e02b4067b2c6c01aa58f4530fdd",
"assets/assets/svg_images/tab2.svg": "8dc807befa39d224ff7886ca844bb406",
"assets/assets/svg_images/verified.svg": "490bc648559812eaadc2996efe9e00f8",
"assets/FontManifest.json": "f543000cbf099a8c2360c893b99ae07d",
"assets/fonts/MaterialIcons-Regular.otf": "e998a92feeb1aa6d963272ed24eeb57a",
"assets/NOTICES": "746afb29d03387aa8c1f3b70fdbb0e38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_soloud/web/init_module.dart.js": "ea0b343660fd4dace81cfdc2910d14e6",
"assets/packages/flutter_soloud/web/libflutter_soloud_plugin.js": "fda499f4cf7725c740cf53d28b8970e5",
"assets/packages/flutter_soloud/web/libflutter_soloud_plugin.wasm": "cc369a6499c45bc7b647326179b31fa5",
"assets/packages/flutter_soloud/web/worker.dart.js": "2fddc14058b5cc9ad8ba3a15749f9aef",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "16464ccbbfe101c5598d22e6871dccd1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1452f719680172658775532b43611496",
"/": "1452f719680172658775532b43611496",
"main.dart.js": "6363ff11bb5fe0053148c92b99ea44d5",
"manifest.json": "f72d91a3abcc22ed674a5d773750d7ae",
"version.json": "d1fde48e5a750146589db6f00316d342"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
