Info 0    [00:00:39.000] Provided types map file "/typesMap.json" doesn't exist
Creating project service
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/a/tsconfig.json]
{"compilerOptions":{"composite":true},"files":["index.ts"]}

//// [/user/username/projects/myproject/b/tsconfig.json]
{"compilerOptions":{"composite":true,"baseUrl":"./","paths":{"@ref/*":["../*"]}},"files":["index.ts"],"references":[{"path":"../a"}]}

//// [/user/username/projects/myproject/c/tsconfig.json]
{"compilerOptions":{"baseUrl":"./","paths":{"@ref/*":["../refs/*"]}},"files":["index.ts"],"references":[{"path":"../b"}]}

//// [/user/username/projects/myproject/a/index.ts]
export class A {}

//// [/user/username/projects/myproject/b/index.ts]
import {A} from '@ref/a';
export const b = new A();

//// [/user/username/projects/myproject/c/index.ts]
import {b} from '../b';
import {X} from "@ref/a";
b;
X;

//// [/user/username/projects/myproject/refs/a.d.ts]
export class X {}
export class A {}


PolledWatches::

FsWatches::

FsWatchesRecursive::

Info 1    [00:00:40.000] Search path: /user/username/projects/myproject/c
Info 2    [00:00:41.000] For info: /user/username/projects/myproject/c/index.ts :: Config file name: /user/username/projects/myproject/c/tsconfig.json
Info 3    [00:00:42.000] Creating configuration project /user/username/projects/myproject/c/tsconfig.json
Info 4    [00:00:43.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/c/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Config file
Info 5    [00:00:44.000] Config: /user/username/projects/myproject/c/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/c/index.ts"
 ],
 "options": {
  "baseUrl": "/user/username/projects/myproject/c",
  "paths": {
   "@ref/*": [
    "../refs/*"
   ]
  },
  "pathsBasePath": "/user/username/projects/myproject/c",
  "configFilePath": "/user/username/projects/myproject/c/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/b",
   "originalPath": "../b"
  }
 ]
}
Info 6    [00:00:45.000] Plugins were requested but not running in environment that supports 'require'. Nothing will be loaded
Info 7    [00:00:46.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/c/tsconfig.json
Info 8    [00:00:47.000] Config: /user/username/projects/myproject/b/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/b/index.ts"
 ],
 "options": {
  "composite": true,
  "baseUrl": "/user/username/projects/myproject/b",
  "paths": {
   "@ref/*": [
    "../*"
   ]
  },
  "pathsBasePath": "/user/username/projects/myproject/b",
  "configFilePath": "/user/username/projects/myproject/b/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/a",
   "originalPath": "../a"
  }
 ]
}
Info 9    [00:00:48.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Config file
Info 10   [00:00:49.000] Config: /user/username/projects/myproject/a/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/a/index.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/user/username/projects/myproject/a/tsconfig.json"
 }
}
Info 11   [00:00:50.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Config file
Info 12   [00:00:51.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 0 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 13   [00:00:52.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 0 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 14   [00:00:53.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 15   [00:00:54.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 16   [00:00:55.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/b/index.ts 500 undefined WatchType: Closed Script info
Info 17   [00:00:56.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/index.ts 500 undefined WatchType: Closed Script info
Info 18   [00:00:57.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refs/a.d.ts 500 undefined WatchType: Closed Script info
Info 19   [00:00:58.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 20   [00:00:59.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refs 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 21   [00:01:00.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/refs 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 22   [00:01:01.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 23   [00:01:02.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Failed Lookup Locations
Info 24   [00:01:03.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/c/node_modules/@types 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Type roots
Info 25   [00:01:04.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/c/node_modules/@types 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Type roots
Info 26   [00:01:05.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Type roots
Info 27   [00:01:06.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/c/tsconfig.json WatchType: Type roots
Info 28   [00:01:07.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/c/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 29   [00:01:08.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 30   [00:01:09.000] 	Files (5)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/a/index.ts
	/user/username/projects/myproject/b/index.ts
	/user/username/projects/myproject/refs/a.d.ts
	/user/username/projects/myproject/c/index.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	../a/index.ts
	  Imported via '@ref/a' from file '../b/index.ts'
	../b/index.ts
	  Imported via '../b' from file 'index.ts'
	../refs/a.d.ts
	  Imported via "@ref/a" from file 'index.ts'
	index.ts
	  Part of 'files' list in tsconfig.json

Info 31   [00:01:10.000] -----------------------------------------------
Info 32   [00:01:11.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 32   [00:01:12.000] 	Files (5)

Info 32   [00:01:13.000] -----------------------------------------------
Info 32   [00:01:14.000] Open files: 
Info 32   [00:01:15.000] 	FileName: /user/username/projects/myproject/c/index.ts ProjectRootPath: undefined
Info 32   [00:01:16.000] 		Projects: /user/username/projects/myproject/c/tsconfig.json
Info 32   [00:01:19.000] FileWatcher:: Triggered with /user/username/projects/myproject/b/index.ts 1:: WatchInfo: /user/username/projects/myproject/b/index.ts 500 undefined WatchType: Closed Script info
Info 33   [00:01:20.000] Scheduled: /user/username/projects/myproject/c/tsconfig.json
Info 34   [00:01:21.000] Scheduled: *ensureProjectForOpenFiles*
Info 35   [00:01:22.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/b/index.ts 1:: WatchInfo: /user/username/projects/myproject/b/index.ts 500 undefined WatchType: Closed Script info
Before checking timeout queue length (2) and running
//// [/user/username/projects/myproject/b/index.ts]
import {A} from '@ref/a';
export const b = new A();export function gFoo() { }


PolledWatches::
/user/username/projects/myproject/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/c/tsconfig.json:
  {}
/user/username/projects/myproject/b/tsconfig.json:
  {}
/user/username/projects/myproject/a/tsconfig.json:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/b/index.ts:
  {}
/user/username/projects/myproject/a/index.ts:
  {}
/user/username/projects/myproject/refs/a.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/b:
  {}
/user/username/projects/myproject/refs:
  {}
/user/username/projects/myproject/a:
  {}

Info 36   [00:01:23.000] Running: /user/username/projects/myproject/c/tsconfig.json
Info 37   [00:01:24.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/c/tsconfig.json
Info 38   [00:01:25.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/c/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 39   [00:01:26.000] Different program with same set of files
Info 40   [00:01:27.000] Running: *ensureProjectForOpenFiles*
Info 41   [00:01:28.000] Before ensureProjectForOpenFiles:
Info 42   [00:01:29.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 42   [00:01:30.000] 	Files (5)

Info 42   [00:01:31.000] -----------------------------------------------
Info 42   [00:01:32.000] Open files: 
Info 42   [00:01:33.000] 	FileName: /user/username/projects/myproject/c/index.ts ProjectRootPath: undefined
Info 42   [00:01:34.000] 		Projects: /user/username/projects/myproject/c/tsconfig.json
Info 42   [00:01:35.000] After ensureProjectForOpenFiles:
Info 43   [00:01:36.000] Project '/user/username/projects/myproject/c/tsconfig.json' (Configured)
Info 43   [00:01:37.000] 	Files (5)

Info 43   [00:01:38.000] -----------------------------------------------
Info 43   [00:01:39.000] Open files: 
Info 43   [00:01:40.000] 	FileName: /user/username/projects/myproject/c/index.ts ProjectRootPath: undefined
Info 43   [00:01:41.000] 		Projects: /user/username/projects/myproject/c/tsconfig.json
After checking timeout queue length (2) and running

PolledWatches::
/user/username/projects/myproject/c/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/c/tsconfig.json:
  {}
/user/username/projects/myproject/b/tsconfig.json:
  {}
/user/username/projects/myproject/a/tsconfig.json:
  {}
/user/username/projects/myproject:
  {}
/user/username/projects/myproject/b/index.ts:
  {}
/user/username/projects/myproject/a/index.ts:
  {}
/user/username/projects/myproject/refs/a.d.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/b:
  {}
/user/username/projects/myproject/refs:
  {}
/user/username/projects/myproject/a:
  {}
