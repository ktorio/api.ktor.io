---
title: ContentType - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">ContentType</a></div>

# ContentType

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ContentType</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a></code></div>

Represents a value for a <code>Content-Type</code> header.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-application/index.html">Application</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Application</span></code></div>

Provides a list of standard subtypes of an <code>application</code> content type.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-audio/index.html">Audio</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Audio</span></code></div>

Provides a list of standard subtypes of an <code>audio</code> content type.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-image/index.html">Image</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Image</span></code></div>

Provides a list of standard subtypes of an <code>image</code> content type.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-message/index.html">Message</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Message</span></code></div>

Provides a list of standard subtypes of a <code>message</code> content type.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-multi-part/index.html">MultiPart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">MultiPart</span></code></div>

Provides a list of standard subtypes of a <code>multipart</code> content type.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-text/index.html">Text</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Text</span></code></div>

Provides a list of standard subtypes of a <code>text</code> content type.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-video/index.html">Video</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Video</span></code></div>

Provides a list of standard subtypes of a <code>video</code> content type.


</td>
</tr>
</tbody>
</table>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ContentType</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.ContentType$<init>(kotlin.String, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.ContentType$<init>(kotlin.String, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/contentSubtype">contentSubtype</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.ContentType$<init>(kotlin.String, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="content-subtype.html">contentSubtype</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentSubtype</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

represents a subtype part of the media type.


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentType</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

represents a type part of the media type.


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-header-value-with-parameters/content.html">content</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">content</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

header's content without parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-header-value-with-parameters/parameters.html">parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="equals.html">equals</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">equals</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentType$equals(kotlin.Any)/other">other</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="hash-code.html">hashCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">hashCode</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="match.html">match</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">match</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentType$match(io.ktor.http.ContentType)/pattern">pattern</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ContentType</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">match</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentType$match(kotlin.String)/pattern">pattern</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Checks if <code>this</code> type matches a <a href="match.html#io.ktor.http.ContentType$match(io.ktor.http.ContentType)/pattern">pattern</a> type taking into account placeholder symbols <code>*</code> and parameters.


</td>
</tr>
<tr>
<td markdown="1">

<a href="with-parameter.html">withParameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">withParameter</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentType$withParameter(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.ContentType$withParameter(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentType</span></a></code></div>

Creates a copy of <code>this</code> type with the added parameter with the <a href="with-parameter.html#io.ktor.http.ContentType$withParameter(kotlin.String, kotlin.String)/name">name</a> and <a href="with-parameter.html#io.ktor.http.ContentType$withParameter(kotlin.String, kotlin.String)/value">value</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="without-parameters.html">withoutParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">withoutParameters</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentType</span></a></code></div>

Creates a copy of <code>this</code> type without any parameters


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-header-value-with-parameters/parameter.html">parameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parameter</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.HeaderValueWithParameters$parameter(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

The first value for the parameter with <a href="../-header-value-with-parameters/parameter.html#io.ktor.http.HeaderValueWithParameters$parameter(kotlin.String)/name">name</a> comparing case-insensitively or <code>null</code> if no such parameters found


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-header-value-with-parameters/to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-any.html">Any</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Any</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentType</span></a></code></div>

Represents a pattern <code>* / *</code> to match any content type.


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="parse.html">parse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parse</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentType.Companion$parse(kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentType</span></a></code></div>

Parses a string representing a <code>Content-Type</code> header into a <a href="./index.md">ContentType</a> instance.


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../charset.html">charset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a><span class="symbol">.</span><span class="identifier">charset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Extracts a <a href="#">Charset</a> value from the given <code>Content-Type</code>, <code>Content-Disposition</code> or similar header value.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../file-extensions.html">fileExtensions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ContentType</span></a><span class="symbol">.</span><span class="identifier">fileExtensions</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Recommended file name extensions for this content type


</td>
</tr>
<tr>
<td markdown="1">

<a href="../with-charset.html">withCharset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ContentType</span></a><span class="symbol">.</span><span class="identifier">withCharset</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$withCharset(io.ktor.http.ContentType, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentType</span></a></code></div>

Creates a copy of <code>this</code> type with the added charset parameter with <a href="../with-charset.html#io.ktor.http$withCharset(io.ktor.http.ContentType, java.nio.charset.Charset)/charset">charset</a> value.


</td>
</tr>
</tbody>
</table>

### Companion Object Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../default-for-file.html">defaultForFile</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">defaultForFile</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$defaultForFile(io.ktor.http.ContentType.Companion, java.io.File)/file">file</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentType</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">defaultForFile</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$defaultForFile(io.ktor.http.ContentType.Companion, java.nio.file.Path)/file">file</span><span class="symbol">:</span>&nbsp;<span class="identifier">Path</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentType</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../default-for-file-extension.html">defaultForFileExtension</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">defaultForFileExtension</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$defaultForFileExtension(io.ktor.http.ContentType.Companion, kotlin.String)/extension">extension</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentType</span></a></code></div>

Default <a href="./index.md">ContentType</a> for <a href="../default-for-file-extension.html#io.ktor.http$defaultForFileExtension(io.ktor.http.ContentType.Companion, kotlin.String)/extension">extension</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../default-for-file-path.html">defaultForFilePath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">defaultForFilePath</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$defaultForFilePath(io.ktor.http.ContentType.Companion, kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentType</span></a></code></div>

Default <a href="./index.md">ContentType</a> for file <a href="../default-for-file-path.html#io.ktor.http$defaultForFilePath(io.ktor.http.ContentType.Companion, kotlin.String)/path">path</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../from-file-extension.html">fromFileExtension</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">fromFileExtension</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$fromFileExtension(io.ktor.http.ContentType.Companion, kotlin.String)/ext">ext</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">ContentType</span></a><span class="symbol">&gt;</span></code></div>

Recommended content type by file name extension


</td>
</tr>
<tr>
<td markdown="1">

<a href="../from-file-path.html">fromFilePath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">fromFilePath</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$fromFilePath(io.ktor.http.ContentType.Companion, kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">ContentType</span></a><span class="symbol">&gt;</span></code></div>

Recommended content types by file <a href="../from-file-path.html#io.ktor.http$fromFilePath(io.ktor.http.ContentType.Companion, kotlin.String)/path">path</a>


</td>
</tr>
</tbody>
</table>
