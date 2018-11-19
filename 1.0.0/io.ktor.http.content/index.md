---
title: io.ktor.http.content - 
layout: api
---



## Package io.ktor.http.content

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-byte-array-content/index.html">ByteArrayContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ByteArrayContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-outgoing-content/-byte-array-content/index.html"><span class="identifier">ByteArrayContent</span></a></code></div>

Implementation of the <a href="-outgoing-content/-byte-array-content/index.html">OutgoingContent.ByteArrayContent</a> for sending array of bytes


</td>
</tr>
<tr>
<td markdown="1">

<a href="-caching-options/index.html">CachingOptions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">CachingOptions</span></code></div>

Specifies caching properties for an <a href="-outgoing-content/index.html">OutgoingContent</a> such as Cache-Control or Expires


</td>
</tr>
<tr>
<td markdown="1">

<a href="-entity-tag-version/index.html">EntityTagVersion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">EntityTagVersion</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-version/index.html"><span class="identifier">Version</span></a></code></div>

This version checks <a href="-entity-tag-version/etag.html">etag</a> value and pass it through conditions supplied by the remote client. Depending on conditions it
produces return value of enum type <a href="-version-check-result/index.html">VersionCheckResult</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-status-code-content/index.html">HttpStatusCodeContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpStatusCodeContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-outgoing-content/-no-content/index.html"><span class="identifier">NoContent</span></a></code></div>

Represents a simple status code response with no content


</td>
</tr>
<tr>
<td markdown="1">

<a href="-jar-file-content/index.html">JarFileContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JarFileContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-outgoing-content/-read-channel-content/index.html"><span class="identifier">ReadChannelContent</span></a></code></div>

Represents an <a href="-outgoing-content/index.html">OutgoingContent</a> for a resource inside a Jar file


</td>
</tr>
<tr>
<td markdown="1">

<a href="-last-modified-version/index.html">LastModifiedVersion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">LastModifiedVersion</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-version/index.html"><span class="identifier">Version</span></a></code></div>

This version passes the given <a href="-last-modified-version/last-modified.html">lastModified</a> date through the client provided
http conditional headers If-Modified-Since and If-Unmodified-Since.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-local-file-content/index.html">LocalFileContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">LocalFileContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-outgoing-content/-read-channel-content/index.html"><span class="identifier">ReadChannelContent</span></a></code></div>

OutgoingContent representing a local <a href="-local-file-content/file.html">file</a> with a specified <a href="-local-file-content/content-type.html">contentType</a>, <a href="../io.ktor.http/expires.html">expires</a> date and <a href="caching.html">caching</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-multi-part-data/index.html">MultiPartData</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">MultiPartData</span></code></div>

Represents a multipart data stream that could be received from a call


</td>
</tr>
<tr>
<td markdown="1">

<a href="-outgoing-content/index.html">OutgoingContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OutgoingContent</span></code></div>

Information about the content to be sent to the peer, recognized by a client or server engine


</td>
</tr>
<tr>
<td markdown="1">

<a href="-output-stream-content/index.html">OutputStreamContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">OutputStreamContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-outgoing-content/-write-channel-content/index.html"><span class="identifier">WriteChannelContent</span></a></code></div>

<a href="-outgoing-content/index.html">OutgoingContent</a> to respond with <a href="http://docs.oracle.com/javase/6/docs/api/java/io/OutputStream.html">OutputStream</a>.
The stream would be automatically closed after <a href="#">body</a> finish.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-part-data/index.html">PartData</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">PartData</span></code></div>

Represents a multipart/form-data entry. Could be a <a href="-part-data/-form-item/index.html">FormItem</a> or <a href="-part-data/-file-item/index.html">FileItem</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-text-content/index.html">TextContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TextContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-outgoing-content/-byte-array-content/index.html"><span class="identifier">ByteArrayContent</span></a></code></div>

Represents a text content that could be sent


</td>
</tr>
<tr>
<td markdown="1">

<a href="-u-r-i-file-content/index.html">URIFileContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">URIFileContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-outgoing-content/-read-channel-content/index.html"><span class="identifier">ReadChannelContent</span></a></code></div>

Represents a content that is served from the specified <a href="-u-r-i-file-content/uri.html">uri</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-version/index.html">Version</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Version</span></code></div>

Represents content version


</td>
</tr>
<tr>
<td markdown="1">

<a href="-version-check-result/index.html">VersionCheckResult</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">VersionCheckResult</span></code></div>

Represent result of the version comparison between content being sent and HTTP request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-writer-content/index.html">WriterContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">WriterContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-outgoing-content/-write-channel-content/index.html"><span class="identifier">WriteChannelContent</span></a></code></div>

Represents a content that is produced by <a href="#">body</a> function


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-caching-property.html">CachingProperty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">CachingProperty</span><span class="symbol">: </span><a href="../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="-caching-options/index.html"><span class="identifier">CachingOptions</span></a><span class="symbol">&gt;</span></code></div>

Specifies a key for CacheControl extension property for <a href="-outgoing-content/index.html">OutgoingContent</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-version-list-property.html">VersionListProperty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">VersionListProperty</span><span class="symbol">: </span><a href="../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

Specifies a key for VersionList extension property for <a href="-outgoing-content/index.html">OutgoingContent</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="caching.html">caching</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">caching</span><span class="symbol">: </span><a href="-caching-options/index.html"><span class="identifier">CachingOptions</span></a><span class="symbol">?</span></code></div>

Gets or sets <a href="../io.ktor.http/-cache-control/index.html">CacheControl</a> instance as an extension property on this content


</td>
</tr>
<tr>
<td markdown="1">

<a href="static-base-package.html">staticBasePackage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">staticBasePackage</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Base package for relative resources calculations for static content


</td>
</tr>
<tr>
<td markdown="1">

<a href="static-root-folder.html">staticRootFolder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">staticRootFolder</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">?</span></code></div>

Base folder for relative files calculations for static content


</td>
</tr>
<tr>
<td markdown="1">

<a href="stream-provider.html">streamProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="-part-data/-file-item/index.html"><span class="identifier">FileItem</span></a><span class="symbol">.</span><span class="identifier">streamProvider</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html"><span class="identifier">InputStream</span></a></code></div>

Provides file item's content as an <a href="http://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html">InputStream</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="versions.html">versions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">versions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span></code></div>

Gets or sets list of <a href="-version/index.html">Version</a> instances as an extension property on this content


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-caching-options.html">CachingOptions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CachingOptions</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$CachingOptions(io.ktor.http.CacheControl, java.time.ZonedDateTime)/cacheControl">cacheControl</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-cache-control/index.html"><span class="identifier">CacheControl</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$CachingOptions(io.ktor.http.CacheControl, java.time.ZonedDateTime)/expires">expires</span><span class="symbol">:</span>&nbsp;<span class="identifier">ZonedDateTime</span><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-caching-options/index.html"><span class="identifier">CachingOptions</span></a></code></div>

Creates <a href="-caching-options/index.html">CachingOptions</a> instance with <a href="#">ZonedDateTime</a> expiration time


</td>
</tr>
<tr>
<td markdown="1">

<a href="-local-file-content.html">LocalFileContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">LocalFileContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$LocalFileContent(java.io.File, kotlin.String, io.ktor.http.ContentType)/baseDir">baseDir</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$LocalFileContent(java.io.File, kotlin.String, io.ktor.http.ContentType)/relativePath">relativePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$LocalFileContent(java.io.File, kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.defaultForFilePath(relativePath)<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-local-file-content/index.html"><span class="identifier">LocalFileContent</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">LocalFileContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$LocalFileContent(java.nio.file.Path, java.nio.file.Path, io.ktor.http.ContentType)/baseDir">baseDir</span><span class="symbol">:</span>&nbsp;<span class="identifier">Path</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$LocalFileContent(java.nio.file.Path, java.nio.file.Path, io.ktor.http.ContentType)/relativePath">relativePath</span><span class="symbol">:</span>&nbsp;<span class="identifier">Path</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$LocalFileContent(java.nio.file.Path, java.nio.file.Path, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.defaultForFile(relativePath)<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-local-file-content/index.html"><span class="identifier">LocalFileContent</span></a></code></div>

Creates an instance of <a href="-local-file-content/index.html">LocalFileContent</a> for a file designated by <a href="-local-file-content.html#io.ktor.http.content$LocalFileContent(java.io.File, kotlin.String, io.ktor.http.ContentType)/relativePath">relativePath</a> in a <a href="-local-file-content.html#io.ktor.http.content$LocalFileContent(java.io.File, kotlin.String, io.ktor.http.ContentType)/baseDir">baseDir</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="default.html">default</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">default</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$default(io.ktor.routing.Route, kotlin.String)/localPath">localPath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">default</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$default(io.ktor.routing.Route, java.io.File)/localPath">localPath</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Specifies <a href="default.html#io.ktor.http.content$default(io.ktor.routing.Route, kotlin.String)/localPath">localPath</a> as a default file to serve when folder is requested


</td>
</tr>
<tr>
<td markdown="1">

<a href="default-resource.html">defaultResource</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">defaultResource</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$defaultResource(io.ktor.routing.Route, kotlin.String, kotlin.String)/resource">resource</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$defaultResource(io.ktor.routing.Route, kotlin.String, kotlin.String)/resourcePackage">resourcePackage</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Specifies <a href="default-resource.html#io.ktor.http.content$defaultResource(io.ktor.routing.Route, kotlin.String, kotlin.String)/resource">resource</a> as a default resources to serve when folder is requested


</td>
</tr>
<tr>
<td markdown="1">

<a href="file.html">file</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">file</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/remotePath">remotePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/localPath">localPath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;remotePath<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">file</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, java.io.File)/remotePath">remotePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, java.io.File)/localPath">localPath</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets up routing to serve <a href="file.html#io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/localPath">localPath</a> file as <a href="file.html#io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/remotePath">remotePath</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="files.html">files</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">files</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$files(io.ktor.routing.Route, kotlin.String)/folder">folder</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">files</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$files(io.ktor.routing.Route, java.io.File)/folder">folder</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets up routing to serve all files from <a href="files.html#io.ktor.http.content$files(io.ktor.routing.Route, kotlin.String)/folder">folder</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="for-each-part.html">forEachPart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-multi-part-data/index.html"><span class="identifier">MultiPartData</span></a><span class="symbol">.</span><span class="identifier">forEachPart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$forEachPart(io.ktor.http.content.MultiPartData, kotlin.SuspendFunction1((io.ktor.http.content.PartData, kotlin.Unit)))/partHandler">partHandler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Parse multipart data stream and invoke <a href="for-each-part.html#io.ktor.http.content$forEachPart(io.ktor.http.content.MultiPartData, kotlin.SuspendFunction1((io.ktor.http.content.PartData, kotlin.Unit)))/partHandler">partHandler</a> for each <a href="-part-data/index.html">PartData</a> encountered


</td>
</tr>
<tr>
<td markdown="1">

<a href="read-all-parts.html">readAllParts</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-multi-part-data/index.html"><span class="identifier">MultiPartData</span></a><span class="symbol">.</span><span class="identifier">readAllParts</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span></code></div>

Parse multipart data stream and put all parts into a list


</td>
</tr>
<tr>
<td markdown="1">

<a href="resolve-resource.html">resolveResource</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">resolveResource</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/resourcePackage">resourcePackage</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/classLoader">classLoader</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html"><span class="identifier">ClassLoader</span></a>&nbsp;<span class="symbol">=</span>&nbsp;application.environment.classLoader<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/mimeResolve">mimeResolve</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{ ContentType.defaultForFileExtension(it) }<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">?</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="resource.html">resource</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">resource</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/remotePath">remotePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/resource">resource</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;remotePath<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/resourcePackage">resourcePackage</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets up routing to serve <a href="resource.html#io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/resource">resource</a> as <a href="resource.html#io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/remotePath">remotePath</a> in <a href="resource.html#io.ktor.http.content$resource(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.String)/resourcePackage">resourcePackage</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="resources.html">resources</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">resources</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$resources(io.ktor.routing.Route, kotlin.String)/resourcePackage">resourcePackage</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets up routing to serve all resources in <a href="resources.html#io.ktor.http.content$resources(io.ktor.routing.Route, kotlin.String)/resourcePackage">resourcePackage</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="static.html">static</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">static</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$static(io.ktor.routing.Route, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Create a block for static content

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">static</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$static(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/remotePath">remotePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$static(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Create a block for static content at specified <a href="static.html#io.ktor.http.content$static(io.ktor.routing.Route, kotlin.String, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/remotePath">remotePath</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="transform-default-content.html">transformDefaultContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">transformDefaultContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$transformDefaultContent(io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">?</span></code></div>

Default outgoing content transformation


</td>
</tr>
</tbody>
</table>
