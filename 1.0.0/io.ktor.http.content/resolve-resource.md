---
title: resolveResource - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.content</a> / <a href="./resolve-resource.html">resolveResource</a></div>

# resolveResource

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">resolveResource</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/resourcePackage">resourcePackage</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/classLoader">classLoader</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html"><span class="identifier">ClassLoader</span></a>&nbsp;<span class="symbol">=</span>&nbsp;application.environment.classLoader<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$resolveResource(io.ktor.application.ApplicationCall, kotlin.String, kotlin.String, java.lang.ClassLoader, kotlin.Function1((kotlin.String, io.ktor.http.ContentType)))/mimeResolve">mimeResolve</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{ ContentType.defaultForFileExtension(it) }<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">?</span></code></div>

### Parameters

<code>path</code> - is a relative path to the resource

<code>resourcePackage</code> - is a base package the path to be appended to

<code>mimeResolve</code> - is a function that resolves content type by file extension, optional

**Return**
<a href="-local-file-content/index.html">LocalFileContent</a> or <a href="-jar-file-content/index.html">JarFileContent</a> or <code>null</code>

