# Quick Image Download Script
# Save specific URLs for BIM background images

$imageUrls = @{
    "hero-bim.jpg" = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
    "projects-bg.jpg" = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
    "services-mep.jpg" = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
    "contact-bg.jpg" = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
    "team-office.jpg" = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
    "bim-model.jpg" = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
}

$outputDir = ".\Frontend\public\images\backgrounds"

# Create directory if it doesn't exist
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

Write-Host "Downloading BIM background images..." -ForegroundColor Green

foreach ($image in $imageUrls.GetEnumerator()) {
    $filename = $image.Key
    $url = $image.Value
    $outputPath = Join-Path $outputDir $filename
    
    try {
        Write-Host "Downloading $filename..." -ForegroundColor Cyan
        Invoke-WebRequest -Uri $url -OutFile $outputPath -ErrorAction Stop
        Write-Host "✓ Downloaded $filename" -ForegroundColor Green
    }
    catch {
        Write-Host "✗ Failed to download $filename : $_" -ForegroundColor Red
    }
}

Write-Host "`nImage download complete! Check: $outputDir" -ForegroundColor Green
Write-Host "Note: These are placeholder images. Replace with your actual project photos for best results." -ForegroundColor Yellow
