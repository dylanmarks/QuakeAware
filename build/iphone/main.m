//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"development";
NSString * const TI_APPLICATION_ID = @"org.QuakeAware";
NSString * const TI_APPLICATION_PUBLISHER = @"dmarks";
NSString * const TI_APPLICATION_URL = @"http://quakeaware.org";
NSString * const TI_APPLICATION_NAME = @"QuakeAware";
NSString * const TI_APPLICATION_VERSION = @"1.3";
NSString * const TI_APPLICATION_DESCRIPTION = @"Provides survival information and tools stored locally on your phone to prepare and react in the event of an earthquake";
NSString * const TI_APPLICATION_COPYRIGHT = @"2010 by QuakeAware.Org t";
NSString * const TI_APPLICATION_GUID = @"054584c5-5949-4e58-8414-bcfd55390dde";
BOOL const TI_APPLICATION_ANALYTICS = true;

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"/Users/dylanmarks/Sites/QuakeAware/Resources";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

#ifdef __LOG__ID__
	NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
	NSString *documentsDirectory = [paths objectAtIndex:0];
	NSString *logPath = [documentsDirectory stringByAppendingPathComponent:[NSString stringWithFormat:@"%s.log",STRING(__LOG__ID__)]];
	freopen([logPath cStringUsingEncoding:NSUTF8StringEncoding],"w+",stderr);
	fprintf(stderr,"[INFO] Application started\n");
#endif

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
